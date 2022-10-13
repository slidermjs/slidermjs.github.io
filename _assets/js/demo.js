/* eslint-disable no-undef */
const demo = () => {
  if (!document.querySelector('.demo-wrapper')) {
    return;
  }

  const debounce = (func, delay) => {
    let timer = null;
    return (...args) => {
      const self = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(self, args);
      }, delay);
    };
  };

  let sliderm = new Sliderm('#demo-slider');

  const intializeSlider = () => {
    const pagination = document.querySelector('#option__pagination--value').innerHTML === 'true';
    const previousNext =
      document.querySelector('#option__previous-next--value').innerHTML === 'true';
    const align = document.querySelector('#option__align--value').innerHTML;
    const previewEdge = Number(document.querySelector('#option__edge--value').innerHTML);
    const preview = document.querySelector('#option__preview--value').innerHTML === 'true';
    const grouping = document.querySelector('#option__grouping--value').innerHTML === 'true';
    const spacing = Number(document.querySelector('#option__spacing--value').innerHTML);
    const loop = document.querySelector('#option__loop--value').innerHTML === 'true';
    const duration = Number(document.querySelector('#option__duration--value').innerHTML);
    const columns = Number(document.querySelector('#option__columns--value').innerHTML);

    const config = {
      columns,
      duration,
      loop,
      spacing,
      grouping,
      preview,
      previewEdge,
      align,
      previousNext,
      pagination,
    };

    if (sliderm) {
      sliderm.destory();
    }
    sliderm = new Sliderm('#demo-slider', config);
  };

  const resetSlider = debounce(() => {
    intializeSlider();
  }, 2000);

  const options = {
    columns: () => {
      const dom = document.querySelector('#option__columns');
      noUiSlider.create(dom, {
        start: [4],
        connect: 'lower',
        step: 1,
        range: {
          min: 1,
          max: 4,
        },
      });
      dom.noUiSlider.on('update', (values, handle) => {
        document.querySelector('#option__columns--value').innerHTML = Number(values[handle]);
        resetSlider();
      });
    },
    duration: () => {
      const dom = document.querySelector('#option__duration');
      noUiSlider.create(dom, {
        start: [1000],
        connect: 'lower',
        step: 100,
        range: {
          min: 1000,
          max: 10000,
        },
      });
      dom.noUiSlider.on('update', (values, handle) => {
        document.querySelector('#option__duration--value').innerHTML = Number(values[handle]);
        resetSlider();
      });
    },
    loop: () => {
      const dom = document.querySelector('#option__loop');
      noUiSlider.create(dom, {
        start: 1,
        range: {
          min: [0, 1],
          max: 1,
        },
      });
      dom.noUiSlider.on('update', (values, handle) => {
        const value = Number(values[handle]);
        if (value === 1) {
          dom.classList.remove('off');
          dom.classList.add('on');
          document.querySelector('#option__loop--value').innerHTML = 'true';
        } else {
          dom.classList.remove('on');
          dom.classList.add('off');
          document.querySelector('#option__loop--value').innerHTML = 'false';
        }
        resetSlider();
      });
    },
    spacing: () => {
      const dom = document.querySelector('#option__spacing');
      noUiSlider.create(dom, {
        start: [10],
        connect: 'lower',
        step: 10,
        range: {
          min: 0,
          max: 100,
        },
      });
      dom.noUiSlider.on('update', (values, handle) => {
        document.querySelector('#option__spacing--value').innerHTML = Number(values[handle]);
        resetSlider();
      });
    },
    grouping: () => {
      const dom = document.querySelector('#option__grouping');
      noUiSlider.create(dom, {
        start: 0,
        range: {
          min: [0, 1],
          max: 1,
        },
      });
      dom.noUiSlider.on('update', (values, handle) => {
        const value = Number(values[handle]);
        if (value === 1) {
          dom.classList.remove('off');
          dom.classList.add('on');
          document.querySelector('#option__grouping--value').innerHTML = 'true';
        } else {
          dom.classList.remove('on');
          dom.classList.add('off');
          document.querySelector('#option__grouping--value').innerHTML = 'false';
        }
        resetSlider();
      });
    },
    preview: () => {
      const dom = document.querySelector('#option__preview');
      noUiSlider.create(dom, {
        start: 0,
        range: {
          min: [0, 1],
          max: 1,
        },
      });
      dom.noUiSlider.on('update', (values, handle) => {
        const value = Number(values[handle]);
        if (value === 1) {
          dom.classList.remove('off');
          dom.classList.add('on');
          document.querySelector('#option__preview--value').innerHTML = 'true';
        } else {
          dom.classList.remove('on');
          dom.classList.add('off');
          document.querySelector('#option__preview--value').innerHTML = 'false';
        }
        resetSlider();
      });
    },
    edge: () => {
      const dom = document.querySelector('#option__edge');
      noUiSlider.create(dom, {
        start: [10],
        connect: 'lower',
        step: 10,
        range: {
          min: 0,
          max: 100,
        },
      });
      dom.noUiSlider.on('update', (values, handle) => {
        document.querySelector('#option__edge--value').innerHTML = Number(values[handle]);
        resetSlider();
      });
    },
    align: () => {
      document.querySelector('#option__align').addEventListener('change', (e) => {
        document.querySelector('#option__align--value').innerHTML = e.target.value;
        resetSlider();
      });
    },
    previousNext: () => {
      const dom = document.querySelector('#option__previous-next');
      noUiSlider.create(dom, {
        start: 1,
        range: {
          min: [0, 1],
          max: 1,
        },
      });
      dom.noUiSlider.on('update', (values, handle) => {
        const value = Number(values[handle]);
        if (value === 1) {
          dom.classList.remove('off');
          dom.classList.add('on');
          document.querySelector('#option__previous-next--value').innerHTML = 'true';
        } else {
          dom.classList.remove('on');
          dom.classList.add('off');
          document.querySelector('#option__previous-next--value').innerHTML = 'false';
        }
        resetSlider();
      });
    },
    pagination: () => {
      const dom = document.querySelector('#option__pagination');
      noUiSlider.create(dom, {
        start: 1,
        range: {
          min: [0, 1],
          max: 1,
        },
      });
      dom.noUiSlider.on('update', (values, handle) => {
        const value = Number(values[handle]);
        if (value === 1) {
          dom.classList.remove('off');
          dom.classList.add('on');
          document.querySelector('#option__pagination--value').innerHTML = 'true';
        } else {
          dom.classList.remove('on');
          dom.classList.add('off');
          document.querySelector('#option__pagination--value').innerHTML = 'false';
        }
        resetSlider();
      });
    },
  };

  options.columns();
  options.duration();
  options.loop();
  options.spacing();
  options.grouping();
  options.preview();
  options.edge();
  options.align();
  options.previousNext();
  options.pagination();
};

demo();
