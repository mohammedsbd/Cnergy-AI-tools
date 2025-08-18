import React, { useEffect, useMemo, useReducer, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Search, Calendar, Sun, Moon, ThumbsUp, MessageCircle, Plus, X, ChevronLeft, ChevronRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from "recharts";

/**
 * COMMUNITY — One big, unique, production-style component in a single file.
 * - Tailwind styling (no external CSS needed)
 * - Tabs (Feed, Members, Events, Insights)
 * - Search, filter, pagination
 * - Create Post modal with optimistic updates
 * - LocalStorage persistence for theme and posts
 * - Simple reducer architecture
 * - Framer Motion animations
 * - Recharts visualizations
 */

// --------- Utilities ---------
const uid = () => Math.random().toString(36).slice(2, 10);
const STORAGE_KEYS = {
  THEME: "community_theme",
  POSTS: "community_posts",
};

// --------- Reducer for posts ---------
const initialPosts = [
  {
    id: uid(),
    author: "Alice",
    content: "Kicked off a mentoring circle today!",
    likes: 8,
    comments: 2,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
    tags: ["mentorship", "welcome"],
  },
  {
    id: uid(),
    author: "Bob",
    content: "Community cleanup this Saturday at the park. Join us!",
    likes: 15,
    comments: 4,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    tags: ["events", "environment"],
  },
  {
    id: uid(),
    author: "Charlie",
    content: "Shipping a new open-source tool for onboarding. Feedback welcome 🚀",
    likes: 22,
    comments: 6,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    tags: ["opensource", "product"],
  },
];

function postsReducer(state, action) {
  switch (action.type) {
    case "init": {
      return action.payload ?? state;
    }
    case "add": {
      return [action.payload, ...state];
    }
    case "like": {
      return state.map((p) => (p.id === action.id ? { ...p, likes: p.likes + 1 } : p));
    }
    case "comment": {
      return state.map((p) => (p.id === action.id ? { ...p, comments: p.comments + 1 } : p));
    }
    default:
      return state;
  }
}

// --------- Mock data ---------
const MEMBERS = [
  { id: uid(), name: "Alice Johnson", role: "Admin", joined: "2024-11-01" },
  { id: uid(), name: "Bob Lee", role: "Member", joined: "2025-01-13" },
  { id: uid(), name: "Charlie Kim", role: "Moderator", joined: "2025-02-22" },
  { id: uid(), name: "Diana Prince", role: "Member", joined: "2025-03-18" },
  { id: uid(), name: "Elliot Cruz", role: "Member", joined: "2025-05-04" },
            className="pl-9 pr-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outlin