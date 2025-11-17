"use client";
import AppShowSun from "./app-show-sun";
import { useEffect, useState, useActionState, useOptimistic } from "react";
import { saveClockSettings, incrementCounter, setCounterGoal } from "./actions";

export default function AppHeaderClock({
  isoDateString,
  children,
  initialUserName,
  initialFavoriteTime,
  initialCount,
  initialGoal
}) {
  const [currentDate, setCurrentDate] = useState(new Date(isoDateString));
  const [showClockForm, setShowClockForm] = useState(false);
  const [showGoalForm, setShowGoalForm] = useState(false);

  // Clock settings form state
  const [clockState, clockFormAction, isClockPending] = useActionState(
    saveClockSettings,
    {
      userName: initialUserName,
      favoriteTime: initialFavoriteTime,
      success: false,
      error: null
    }
  );

  // Counter increment state
  const [counterState, counterFormAction, isCounterPending] = useActionState(
    incrementCounter,
    {
      count: initialCount,
      goal: initialGoal,
      success: false,
      error: null
    }
  );

  // Goal setting state
  const [goalState, goalFormAction, isGoalPending] = useActionState(
    setCounterGoal,
    {
      goal: initialGoal,
      count: initialCount,
      success: false,
      error: null
    }
  );

  // Optimistic counter updates
  const [optimisticCount, setOptimisticCount] = useOptimistic(
    counterState.count,
    (currentCount, newCount) => newCount
  );

  // Optimistic clock settings
  const [optimisticUserName, setOptimisticUserName] = useOptimistic(
    clockState.userName
  );
  const [optimisticTime, setOptimisticTime] = useOptimistic(
    clockState.favoriteTime
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate((oldDate) => new Date(oldDate.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClockFormAction = async (formData) => {
    const userName = formData.get('userName');
    const favoriteTime = formData.get('favoriteTime');
    // Optimistically update
    setOptimisticUserName(userName);
    setOptimisticTime(favoriteTime);
    // Submit to server
    const result = await clockFormAction(formData);
    if (result?.success) {
      setShowClockForm(false);
    }
  };

  const handleCounterFormAction = async (formData) => {
    const increment = parseInt(formData.get('increment'), 10);
    const newCount = optimisticCount + increment;
    // Optimistically update counter
    setOptimisticCount(newCount);
    // Submit to server
    await counterFormAction(formData);
  };

  const handleGoalFormAction = async (formData) => {
    const result = await goalFormAction(formData);
    if (result?.success) {
      setShowGoalForm(false);
    }
  };

  const progressPercentage = Math.min(
    (optimisticCount / (goalState.goal || counterState.goal)) * 100,
    100
  );

  return (
    <div>
      {/* Greeting and Clock Display */}
      <div className="mb-3">
        {optimisticUserName && (
          <h4 className="mb-2">
            Welcome, {optimisticUserName}!
          </h4>
        )}
        <div className="d-flex align-items-center gap-2">
          <h5 className="mb-0">
            {new Date(currentDate).toLocaleTimeString()}
          </h5>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setShowClockForm(!showClockForm)}
          >
            {showClockForm ? 'Cancel' : 'Configure Clock'}
          </button>
        </div>
        {optimisticUserName && optimisticTime && (
          <small className="text-muted">
            Your favorite time is {optimisticTime}
          </small>
        )}
      </div>

      {/* Clock Configuration Form */}
      {showClockForm && (
        <form action={handleClockFormAction} className="card p-3 mb-3">
          <h6>Personalize Your Clock</h6>
          <div className="mb-2">
            <label htmlFor="userName" className="form-label small">
              Your Name:
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              className="form-control form-control-sm"
              defaultValue={optimisticUserName}
              placeholder="Enter your name"
              required
              disabled={isClockPending}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="favoriteTime" className="form-label small">
              Favorite Time:
            </label>
            <input
              type="time"
              name="favoriteTime"
              id="favoriteTime"
              className="form-control form-control-sm"
              defaultValue={optimisticTime}
              required
              disabled={isClockPending}
            />
          </div>
          <div className="d-flex gap-2">
            <button
              type="submit"
              className="btn btn-sm btn-primary"
              disabled={isClockPending}
            >
              {isClockPending ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
          {clockState.success && (
            <div className="alert alert-success mt-2 mb-0 py-1 small">
              ✓ {clockState.message}
            </div>
          )}
          {clockState.error && (
            <div className="alert alert-danger mt-2 mb-0 py-1 small">
              ✗ {clockState.error}
            </div>
          )}
        </form>
      )}

      {/* Counter Section */}
      <div className="card p-3 mb-3">
        <h6>Daily Goal Tracker</h6>
        <div className="d-flex align-items-center gap-2 mb-2">
          <strong>Progress:</strong>
          <span className="badge bg-primary">
            {optimisticCount} / {goalState.goal || counterState.goal}
          </span>
          <button
            className="btn btn-sm btn-outline-secondary ms-auto"
            onClick={() => setShowGoalForm(!showGoalForm)}
          >
            {showGoalForm ? 'Cancel' : 'Change Goal'}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="progress mb-3" style={{ height: '20px' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progressPercentage}%` }}
            aria-valuenow={optimisticCount}
            aria-valuemin="0"
            aria-valuemax={goalState.goal || counterState.goal}
          >
            {Math.round(progressPercentage)}%
          </div>
        </div>

        {/* Goal Setting Form */}
        {showGoalForm && (
          <form action={handleGoalFormAction} className="mb-3">
            <div className="input-group input-group-sm">
              <span className="input-group-text">New Goal:</span>
              <input
                type="number"
                name="goal"
                className="form-control"
                defaultValue={goalState.goal || counterState.goal}
                min="10"
                max="1000"
                required
                disabled={isGoalPending}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isGoalPending}
              >
                {isGoalPending ? 'Setting...' : 'Set Goal'}
              </button>
            </div>
            {goalState.error && (
              <small className="text-danger">{goalState.error}</small>
            )}
          </form>
        )}

        {/* Increment Form */}
        <form action={handleCounterFormAction}>
          <input type="hidden" name="increment" value="5" />
          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={isCounterPending}
          >
            {isCounterPending ? 'Adding...' : 'Add +5 to Goal Progress'}
          </button>
        </form>

        {/* Counter Messages */}
        {counterState.success && counterState.message && (
          <div className="alert alert-success mt-2 mb-0 py-1 small">
            {counterState.message}
          </div>
        )}
        {counterState.error && (
          <div className="alert alert-warning mt-2 mb-0 py-1 small">
            {counterState.error}
          </div>
        )}
      </div>

      <div>
        {children}
        <AppShowSun isoDateString={currentDate} />
      </div>
    </div>
  );
}
