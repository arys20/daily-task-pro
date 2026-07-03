export const TASK_CATEGORIES = [
  { id: 'Sport', label: 'Sport', color: 'bg-red-500' },
  { id: 'Escola', label: 'Școală', color: 'bg-blue-500' },
  { id: 'Nutriție', label: 'Nutriție', color: 'bg-green-500' },
  { id: 'Somn', label: 'Somn', color: 'bg-purple-500' },
  { id: 'Alte', label: 'Alte', color: 'bg-gray-500' },
];

export const XP_REWARDS = {
  taskCompleted: 10,
  perfectDay: 100,
  weekStreak: 250,
  monthStreak: 500,
};

export const LEVELS = {
  1: { name: 'Novice', xp: 0 },
  2: { name: 'Intermediate', xp: 1000 },
  3: { name: 'Advanced', xp: 3000 },
  4: { name: 'Expert', xp: 6000 },
  5: { name: 'Master', xp: 10000 },
};

export const MEAL_TYPES = [
  { id: 'breakfast', label: 'Mic dejun' },
  { id: 'lunch', label: 'Prânz' },
  { id: 'dinner', label: 'Cină' },
  { id: 'snack', label: 'Gustare' },
];

export const PROGRESS_COLORS = {
  low: '#FF6B6B', // red < 40%
  medium: '#FFA500', // orange 40-70%
  high: '#51CF66', // green > 70%
};

export const FOOD_DATABASE = [
  {
    name: 'Orez fiert',
    caloriesPer100g: 130,
    proteinPer100g: 2.7,
    carbsPer100g: 28,
    fatPer100g: 0.3,
  },
  {
    name: 'Piept de pui',
    caloriesPer100g: 165,
    proteinPer100g: 31,
    carbsPer100g: 0,
    fatPer100g: 3.6,
  },
  {
    name: 'Broccoli',
    caloriesPer100g: 34,
    proteinPer100g: 2.8,
    carbsPer100g: 7,
    fatPer100g: 0.4,
  },
  {
    name: 'Ou',
    caloriesPer100g: 155,
    proteinPer100g: 13,
    carbsPer100g: 1.1,
    fatPer100g: 11,
  },
  {
    name: 'Banană',
    caloriesPer100g: 89,
    proteinPer100g: 1.1,
    carbsPer100g: 23,
    fatPer100g: 0.3,
  },
];
