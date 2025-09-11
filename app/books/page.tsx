import data from "@/data";
import ItemList from "@/components/ui/ItemList";

export default function BooksPage() {
  return <ItemList items={data.books} category="Books" />;
}
