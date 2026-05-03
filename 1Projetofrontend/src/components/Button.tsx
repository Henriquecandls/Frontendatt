import { useTheme } from "./ThemeContext.tsx";
function Button({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={`btn btn-${theme}`} onClick={toggleTheme}>
      {children}
    </button>
  );
}export default Button;