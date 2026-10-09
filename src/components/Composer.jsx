export default function Composer() {
  function handelSubmit(e){
    e.preventDefault();
    console.log("submit stopped:", e.type);
  }
  return (
    <form className="composer" onSubmit={handelSubmit}>
      <textarea name="draft" rows={2} placeholder="Type a message..." />
      <button type="submit">Send</button>
    </form>
  );
}
