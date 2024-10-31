import CustomBtn from "@/ui/CustomBtn";

export default function NotFound() {
  return (
    <div className="section">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <CustomBtn href="/">Вернуться на главную</CustomBtn>
    </div>
  );
}
