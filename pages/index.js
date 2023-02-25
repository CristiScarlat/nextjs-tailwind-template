let count = 0;
export const getServerSideProps = () => {
  count++;
  return {
    props: {count: count}, // will be passed to the page component as props
  }
}

const Home = ({count}) => {
  return (
    <h1 className="text-3xl font-bold underline text-center text-indigo-400">
      {count}
    </h1>
  )
}

export default Home;
