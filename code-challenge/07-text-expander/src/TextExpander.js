import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    color: `${buttonColor}`,
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
  };

  return (
    <div>
      <div className={className}>
        <span>{displayText}</span>
        <button
          style={buttonStyle}
          onClick={() => setIsExpanded((exp) => !exp)}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </div>
    </div>
  );
}
