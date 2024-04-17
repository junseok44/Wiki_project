import {
  markdown_makeCancelLine,
  markdown_makeContent,
  markdown_makeheader,
  markdown_makelink,
} from "./markdown";

function makeBlock(
  index: string,
  currentTitle: string,
  currentSubcontent: string
) {
  let html = "";

  if (currentSubcontent !== "") {
    // Check for links within subcontent
    currentSubcontent = currentSubcontent.replace(
      /\[\[\[(.*?)\s*\|\s*(.*?)\s*\]\]\]/g,
      (match, p1, p2) => markdown_makelink(p1, p2)
    );

    currentSubcontent = currentSubcontent.replace(
      /\[\[\[(.*?)\s*\]\]\]/g,
      (match, p1) => markdown_makelink(p1, p1)
    );

    currentSubcontent = currentSubcontent.replace(
      /\-\-(.*?)\-\-/g,
      (match, p1) => markdown_makeCancelLine(p1)
    );

    currentTitle = currentTitle.replace(/\[\[\[(.*?)\s*\]\]\]/g, (match, p1) =>
      markdown_makelink(p1, p1)
    );

    currentTitle = currentTitle.replace(
      /\[\[\[(.*?)\s*\|\s*(.*?)\s*\]\]\]/g,
      (match, p1, p2) => markdown_makelink(p1, p2)
    );

    html += `<div class="article__block">${markdown_makeheader(
      currentTitle,
      index
    )}
    ${markdown_makeContent(currentSubcontent)}
    </div>`;
  } else {
    html += `<div class="article__block">${markdown_makeheader(
      currentTitle,
      index
    )}</div>`;
  }

  return html;
}

// currentDepth가 1이면 현재 인덱스를 그대로
// depth가 2이면 현재 인덱스를 현재 stack.join(".") + index

function getStringIndex(
  indexStack: number[],
  currentDepth: number,
  index: number
) {
  if (currentDepth === 1) {
    return index.toString();
  } else {
    return indexStack.join(".") + "." + index;
  }
}

function parseMarkdown(markdown: string) {
  const lines = markdown.split("\n");

  let html = "";
  let currentTitle = "";
  let currentSubcontent = "";

  let index = 1;
  let indexStack: number[] = [];
  let currentDepth = 1;

  for (let line of lines) {
    if (line.startsWith("=") && line.endsWith("=") && line.length >= 2) {
      const result = line.match(/^(=+)(.*?)(=+)$/);
      if (!result) {
        continue;
      }

      const left = result[1].length;
      const right = result[3].length;
      const title = result[2].trim();

      if (left !== right || left < 2 || right < 2) {
        continue;
      }

      if (currentTitle !== "") {
        let indexString = getStringIndex(indexStack, currentDepth, index);
        html += makeBlock(indexString, currentTitle, currentSubcontent);

        if (left - 1 > currentDepth) {
          // Increase depth
          indexStack.push(index);
          index = 1;
          currentDepth = left - 1;
        } else if (left - 1 < currentDepth) {
          // Decrease depth

          indexStack = indexStack.slice(0, left - 1);
          index = indexStack.pop() || 1;
          index += 1;
          currentDepth = left - 1;
        } else {
          // Same depth
          index++;
        }
      } else {
        console.log("Invalid block", currentTitle, currentSubcontent);
      }

      currentTitle = title;
      currentSubcontent = "";
    } else {
      currentSubcontent += currentSubcontent !== "" ? "<br>" : "";

      currentSubcontent += line;
    }
  }

  // Add last title and subcontent
  if (currentTitle !== "") {
    let indexString = getStringIndex(indexStack, currentDepth, index);
    html += makeBlock(indexString, currentTitle, currentSubcontent);
  }

  return html;
}

export default parseMarkdown;
