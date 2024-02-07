export default function Stats({ items }) {
  // Good use case of early rendering
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true);
  const percentagePacked =
    packedItems.length > 0
      ? Math.round((packedItems.length / items.length) * 100)
      : 0;

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you have already packed ${packedItems.length} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
