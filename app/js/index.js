class CodeBlockToggler {
  constructor(el) {
    const blocks = document.querySelectorAll(el);
    this.toggleBtnClass = 'toggle-code-block';
    this.showClass = 'show-code-block';
    this.init(blocks);
  }
    
  setupCodeBlocks(blocks) {
    blocks.forEach(block => {
      const type = block.dataset.codeBlock;
      const parent = block.parentNode;
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      const btn = document.createElement('button');

      btn.classList.add(this.toggleBtnClass);
      btn.textContent = 'Toggle code block';

      code.classList.add('language-' + type);
      code.textContent = block.innerHTML;

      parent.insertBefore(pre, block);
      parent.insertBefore(btn, pre);

      pre.appendChild(code);
    });
  }
  
  toggleCodeBlock(e) {
    const block = e.target.nextSibling;

    if (e.target.className == this.toggleBtnClass) {
      block.classList.contains(this.showClass) ? block.classList.remove(this.showClass) : block.classList.add(this.showClass);
    }  
  }
  
  init(blocks) {
    this.setupCodeBlocks(blocks);
    document.addEventListener('click', this.toggleCodeBlock.bind(this));
  }
}

let codeBlockToggler = new CodeBlockToggler('[data-code-block]');

Prism.plugins.NormalizeWhitespace.setDefaults({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
	'tabs-to-spaces': 2,
});

Prism.highlightAll();