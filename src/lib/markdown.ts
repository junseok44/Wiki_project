export const markdown_makeheader = (text: string, index: string) => {
  return `<div class="article__block-header"><a href="#table_of_contents" id=a-${index}>${index}</a><h2>. ${text}</h2></div>`;
};

export const markdown_makeContent = (text: string) => {
  return `<div class="article__block-content" className="text-red">${text}</div>`;
};

export const markdown_makelink = (text: string, link: string) => {
  const href =
    link.startsWith("http") || link.startsWith("https")
      ? `${link}`
      : `/w/${encodeURIComponent(link)}`;
  return `<a href="${href}">${text}</a>`;
};

export const markdown_makeCancelLine = (text: string) => {
  return `<span class="font-cancle font-secondary">${text}</span>`;
};
