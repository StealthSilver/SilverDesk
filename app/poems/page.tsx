import data from "@/data";
import ItemList from "@/components/ui/ItemList";

export default function PoemsPage() {
  return <ItemList items={data.poems} category="Poems" />;
}
