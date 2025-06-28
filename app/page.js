import CardList from "./components/home/card-list";
import Search from "./components/home/search";

export default function Home() {
  return (
    <div>
      <main>
        <Search />
        <CardList />
      </main>
    </div>
  );
}
