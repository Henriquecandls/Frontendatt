import { useTheme } from "./ThemeContext";

export default function Form() {
  const theme = useTheme();

  return (
    <div style={{
      background: theme === "dark" ? "#111" : "#fff",
      color: theme === "dark" ? "#fff" : "#000"
    }}>
      
    </div>
  );
}export default Form;