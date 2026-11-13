function createElement(tag, classNames, text) {
  const el = document.createElement(tag);
  if (classNames) {
    const classes = Array.isArray(classNames) ? classNames : [classNames];
    el.classList.add(...classes);
  }
  if (text) el.append(text);
  return el;
}

export { createElement };