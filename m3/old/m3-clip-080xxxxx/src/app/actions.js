'use server';

import { cookies } from 'next/headers';

/**
 * Server Action: Save user's theme preference
 * Validates theme choice and stores in cookie for persistence
 */
export async function saveThemePreference(prevState, formData) {
  const theme = formData.get('theme');

  // Validation
  const validThemes = ['light', 'dark', 'auto'];
  if (!theme || !validThemes.includes(theme)) {
    return {
      error: 'Invalid theme selected. Please choose light, dark, or auto.',
      theme: prevState?.theme || 'light',
      success: false
    };
  }

  // Simulate network delay to show pending state
  await new Promise(resolve => setTimeout(resolve, 800));

  // Save to cookie (persists for 1 year)
  cookies().set('user-theme', theme, {
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: false
  });

  return {
    success: true,
    theme,
    message: `Theme set to ${theme} mode!`,
    error: null
  };
}

/**
 * Server Action: Save clock configuration (user name and favorite time)
 * Validates inputs and stores in cookies
 */
export async function saveClockSettings(prevState, formData) {
  const userName = formData.get('userName')?.trim();
  const favoriteTime = formData.get('favoriteTime');

  // Validation
  if (!userName || userName.length < 2) {
    return {
      error: 'Name must be at least 2 characters long',
      userName: prevState?.userName || '',
      favoriteTime: prevState?.favoriteTime || '10:24',
      success: false
    };
  }

  if (userName.length > 30) {
    return {
      error: 'Name must be less than 30 characters',
      userName: prevState?.userName || '',
      favoriteTime: prevState?.favoriteTime || '10:24',
      success: false
    };
  }

  // Validate time format (HH:MM)
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!favoriteTime || !timeRegex.test(favoriteTime)) {
    return {
      error: 'Invalid time format. Please use HH:MM format.',
      userName: prevState?.userName || '',
      favoriteTime: prevState?.favoriteTime || '10:24',
      success: false
    };
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));

  // Save to cookies
  cookies().set('user-name', userName, { maxAge: 60 * 60 * 24 * 365 });
  cookies().set('favorite-time', favoriteTime, { maxAge: 60 * 60 * 24 * 365 });

  return {
    success: true,
    userName,
    favoriteTime,
    message: `Welcome ${userName}! Your clock is set to ${favoriteTime}`,
    error: null
  };
}

/**
 * Server Action: Increment counter with rate limiting
 * Validates rate limits and updates counter progress toward goal
 */
export async function incrementCounter(prevState, formData) {
  const increment = parseInt(formData.get('increment') || '5', 10);
  const currentCount = prevState?.count || 0;
  const goal = prevState?.goal || 100;

  // Get last click timestamp from cookie
  const cookieStore = cookies();
  const lastClickCookie = cookieStore.get('last-click-time');
  const lastClickTime = lastClickCookie ? parseInt(lastClickCookie.value, 10) : 0;
  const now = Date.now();

  // Rate limiting: 6 seconds between clicks
  const timeSinceLastClick = now - lastClickTime;
  const rateLimitMs = 6000; // 6 seconds

  if (lastClickTime && timeSinceLastClick < rateLimitMs) {
    const secondsRemaining = Math.ceil((rateLimitMs - timeSinceLastClick) / 1000);
    return {
      error: `⏱️ Slow down! Wait ${secondsRemaining} more second${secondsRemaining !== 1 ? 's' : ''} before clicking again.`,
      count: currentCount,
      goal,
      success: false
    };
  }

  // Validate increment
  if (increment < 1 || increment > 10) {
    return {
      error: 'Invalid increment value',
      count: currentCount,
      goal,
      success: false
    };
  }

  // Calculate new count
  const newCount = currentCount + increment;

  // Check if goal is reached
  const goalReached = currentCount < goal && newCount >= goal;

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 400));

  // Update cookies
  cookies().set('last-click-time', now.toString(), { maxAge: 60 * 10 }); // 10 min expiry
  cookies().set('counter-value', newCount.toString(), { maxAge: 60 * 60 * 24 }); // 24 hours

  return {
    success: true,
    count: newCount,
    goal,
    message: goalReached
      ? `🎉 Congratulations! You've reached your goal of ${goal} clicks!`
      : `Added ${increment}! Progress: ${newCount}/${goal}`,
    error: null,
    goalReached
  };
}

/**
 * Server Action: Set a new counter goal
 */
export async function setCounterGoal(prevState, formData) {
  const goal = parseInt(formData.get('goal'), 10);

  // Validation
  if (isNaN(goal) || goal < 10 || goal > 1000) {
    return {
      error: 'Goal must be between 10 and 1000',
      goal: prevState?.goal || 100,
      count: prevState?.count || 0,
      success: false
    };
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Save to cookie
  cookies().set('counter-goal', goal.toString(), { maxAge: 60 * 60 * 24 * 365 });

  return {
    success: true,
    goal,
    count: prevState?.count || 0,
    message: `Goal set to ${goal} clicks!`,
    error: null
  };
}
