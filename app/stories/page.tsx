import data from "@/data";
import ItemList from "@/components/ui/ItemList";

export default function StoriesPage() {
  return <ItemList items={data.stories} category="Stories" />;
}
