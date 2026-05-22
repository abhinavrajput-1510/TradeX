export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h5 className="fw-normal mt-3">Support Portal</h5>
        <a href="" className="mt-3">
          Track Tickets
        </a>
      </div>
      <div className="row p-3 m-3 ">
        <div className="col-2"></div>
        <div className="col-4 p-3">
          <h1 className="fs-4 fw-normal">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
          />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday</a>
          <a href="">margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-3">
          <h1 className="fs-4 fw-normal">Featured</h1>
          <ol>
            <li className="mb-2">
              <a href="">Current Takeovers and Delisting</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
