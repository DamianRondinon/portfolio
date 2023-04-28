interface Props {
    title: string;
    titleSpan: string;
}

const SectionTitle = ({ title, titleSpan }: Props) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
      {title}
      <span className="text-base md:text-3xl text-textPink ml-2"> {titleSpan}</span>
    </h2>
  );
};

export default SectionTitle;
