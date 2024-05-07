import { getMeals } from "@/lib/meal";

export default async function Welcome() {
  const meals = await getMeals();
  console.log("meals", meals);
  return <h1>Welcome to Create Next App!</h1>;
}
