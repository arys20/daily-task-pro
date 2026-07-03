export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  profile: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  height?: number; // cm
  weight?: number; // kg
  age?: number;
  dailyCalorieGoal?: number;
  dailyProteinGoal?: number; // g
  dailyFatGoal?: number; // g
  dailyCarbGoal?: number; // g
  dailyWaterGoal?: number; // ml
  dailyStepsGoal?: number;
  dailyTasksGoal?: number;
  timezone?: string;
}

export interface Task {
  id: string;
  userId: string;
  title: string;
  description?: string;
  category: TaskCategory;
  completed: boolean;
  completedAt?: Date;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  recurring?: RecurringPattern;
  tags?: string[];
  xpReward?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type TaskCategory = 'Sport' | 'Escola' | 'Nutriție' | 'Somn' | 'Alte';

export interface RecurringPattern {
  frequency: 'daily' | 'weekly' | 'monthly';
  endDate?: Date;
  daysOfWeek?: number[]; // 0-6
}

export interface TaskTemplate {
  id: string;
  userId: string;
  name: string;
  description?: string;
  tasks: Partial<Task>[];
  createdAt: Date;
}

export interface FoodEntry {
  id: string;
  userId: string;
  date: Date;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  time: string;
  food: string;
  weight: number; // grams
  calories: number;
  protein: number; // g
  carbs: number; // g
  fat: number; // g
  createdAt: Date;
}

export interface DailyNutrition {
  userId: string;
  date: Date;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  totalWater: number;
  meals: FoodEntry[];
}

export interface DailyProgress {
  userId: string;
  date: Date;
  totalTasks: number;
  completedTasks: number;
  percentage: number;
  xpEarned: number;
  streakDays: number;
}

export interface GameficationData {
  userId: string;
  totalXP: number;
  level: number;
  currentLevelXP: number;
  nextLevelXP: number;
  badges: Badge[];
  streakDays: number;
  totalCompletedTasks: number;
  totalPerfectDays: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'task' | 'meal' | 'water' | 'sleep' | 'workout';
  title: string;
  message: string;
  scheduled: Date;
  sent: boolean;
  actionUrl?: string;
}

export interface StatisticsData {
  period: 'daily' | 'weekly' | 'monthly';
  taskCompletion: number[];
  calories: number[];
  protein: number[];
  weight?: number[];
  tasksCompleted: number[];
  dates: string[];
}
