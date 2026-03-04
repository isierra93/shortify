import { CardItem, cards } from "./Items/cardItems";

export default function Card() {
    return (
        <section className="mx-12.5 md:mx-25 lg:mx-46.75 2xl:mx-87.5 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9.25 lg:gap-6 xl:gap-10  max-w-7xl mx-auto">
                {cards.map(({ id, ...rest }) => (
                    <CardItem key={id} {...rest} />
                ))}
            </div>
        </section>
    );
}
