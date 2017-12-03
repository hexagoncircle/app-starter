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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvZGVCbG9ja1RvZ2dsZXIge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpO1xuICAgIHRoaXMudG9nZ2xlQnRuQ2xhc3MgPSAndG9nZ2xlLWNvZGUtYmxvY2snO1xuICAgIHRoaXMuc2hvd0NsYXNzID0gJ3Nob3ctY29kZS1ibG9jayc7XG4gICAgdGhpcy5pbml0KGJsb2Nrcyk7XG4gIH1cbiAgICBcbiAgc2V0dXBDb2RlQmxvY2tzKGJsb2Nrcykge1xuICAgIGJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSBibG9jay5kYXRhc2V0LmNvZGVCbG9jaztcbiAgICAgIGNvbnN0IHBhcmVudCA9IGJsb2NrLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICAgIGNvbnN0IGNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2RlJyk7XG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQodGhpcy50b2dnbGVCdG5DbGFzcyk7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSAnVG9nZ2xlIGNvZGUgYmxvY2snO1xuXG4gICAgICBjb2RlLmNsYXNzTGlzdC5hZGQoJ2xhbmd1YWdlLScgKyB0eXBlKTtcbiAgICAgIGNvZGUudGV4dENvbnRlbnQgPSBibG9jay5pbm5lckhUTUw7XG5cbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocHJlLCBibG9jayk7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGJ0biwgcHJlKTtcblxuICAgICAgcHJlLmFwcGVuZENoaWxkKGNvZGUpO1xuICAgIH0pO1xuICB9XG4gIFxuICB0b2dnbGVDb2RlQmxvY2soZSkge1xuICAgIGNvbnN0IGJsb2NrID0gZS50YXJnZXQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IHRoaXMudG9nZ2xlQnRuQ2xhc3MpIHtcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnNob3dDbGFzcykgPyBibG9jay5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2hvd0NsYXNzKSA6IGJsb2NrLmNsYXNzTGlzdC5hZGQodGhpcy5zaG93Q2xhc3MpO1xuICAgIH0gIFxuICB9XG4gIFxuICBpbml0KGJsb2Nrcykge1xuICAgIHRoaXMuc2V0dXBDb2RlQmxvY2tzKGJsb2Nrcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNvZGVCbG9jay5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5sZXQgY29kZUJsb2NrVG9nZ2xlciA9IG5ldyBDb2RlQmxvY2tUb2dnbGVyKCdbZGF0YS1jb2RlLWJsb2NrXScpO1xuXG5QcmlzbS5wbHVnaW5zLk5vcm1hbGl6ZVdoaXRlc3BhY2Uuc2V0RGVmYXVsdHMoe1xuXHQncmVtb3ZlLXRyYWlsaW5nJzogdHJ1ZSxcblx0J3JlbW92ZS1pbmRlbnQnOiB0cnVlLFxuXHQnbGVmdC10cmltJzogdHJ1ZSxcblx0J3JpZ2h0LXRyaW0nOiB0cnVlLFxuXHQndGFicy10by1zcGFjZXMnOiAyLFxufSk7XG5cblByaXNtLmhpZ2hsaWdodEFsbCgpOyJdfQ==
