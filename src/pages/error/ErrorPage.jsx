import { Link } from "react-router-dom"

function Error() {
  return (
    <>
    <div className="bg-red-500 text-white min-h-dvh justify-center items-center flex flex-col">
      <h1>ERROR NOT FOUND</h1>
      <Link
      to="/">
        <button className=" bg-blue-500  ">
             <p>
              Click and Back to Home Page
            </p>
        </button>
      </Link>
    </div>
  </>
  )
}

export default Error
