export default function Subscribe() {
  return (
    <div className="d-flex flex-column bg-light py-3">
      <form className="d-flex flex-column justify-content-center align-items-center gap-3 goudy">
        <h3 className="w-75">
          Be The First To Know. <b>Subscribe</b> To Our
          <h3>Mailing List</h3>
        </h3>
        <input
          type="text"
          placeholder="Name"
          required
          className="p-3 subscribe"
        />
        <input
          type="text"
          placeholder="Email"
          required
          className="p-3 subscribe"
        />
        <button type="submit" className="p-3 subscribe btn btn-dark">
          Subscribe 😀
        </button>
      </form>
    </div>
  );
}
