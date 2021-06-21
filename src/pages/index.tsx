import Clock from '../components/Clock'


function Home() {
  return (
    <>
      <div className="container-fluid min-vh-100 bg-light d-flex" style={{
        backgroundImage: "linear-gradient(100deg, var(--bs-primary), var(--bs-danger))"
      }}>
        <div className="mx-auto my-auto">
          <Clock />
        </div>
      </div>
    </>
  )
}

export default Home
