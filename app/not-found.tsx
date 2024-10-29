import Btn from "@/ui/Btn";

export default function NotFound() {
  return (
    <div className="section">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Btn to="/" title="Вернуться на главную" className="mb-expand" />
    </div>
  );
}
