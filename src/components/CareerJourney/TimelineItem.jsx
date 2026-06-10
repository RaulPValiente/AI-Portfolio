const TimelineItem = ({ item, isLast }) => {
  return (
    <div className="relative flex gap-8">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent-green mt-1.5 flex-shrink-0" />
        {!isLast && (
          <div className="w-px flex-1 bg-bg-border" />
        )}
      </div>

      <div className="pb-12">
        <span className="text-sm font-mono text-accent-green">
          {item.date}
        </span>
        <h3 className="text-lg font-semibold text-text-primary mt-1 mb-2">
          {item.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
