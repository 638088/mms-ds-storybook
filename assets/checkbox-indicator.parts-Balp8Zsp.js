import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{i as t,m as n,s as r,t as i}from"./lit-CBo78ikN.js";function a(e,n,i={}){return r`<span
    class="indicator"
    data-size=${e}
    data-state=${n}
    aria-hidden=${i.decorative===!1?t:`true`}
  ></span>`}var o,s=e((()=>{i(),o=n`
  .indicator {
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
    border: var(--border-width-xs) solid var(--_stroke, var(--color-border-interactive));
    border-radius: var(--radius-xs);
    background: transparent;
    transition:
      background var(--motion-duration-fast) var(--motion-easing-standard),
      border-color var(--motion-duration-fast) var(--motion-easing-standard);
    z-index: 1;
  }

  .indicator[data-size='sm'] {
    width: var(--size-sm2); /* 12px */
    height: var(--size-sm2);
  }

  .indicator[data-size='md'] {
    width: var(--size-md1); /* 16px */
    height: var(--size-md1);
  }

  .indicator[data-size='lg'] {
    width: var(--size-md2); /* 20px */
    height: var(--size-md2);
  }

  /* Checkmark (checked) and dash (indeterminate) — hidden by default */
  .indicator::after {
    content: '';
    position: absolute;
    display: none;
    border: solid var(--_on-fill, var(--color-text-on-onyx));
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .indicator::before {
    content: '';
    position: absolute;
    display: none;
    height: 2px;
    background: var(--_on-fill, var(--color-text-on-onyx));
  }

  /* Checkmark: 3px x 6px at (3px, 0px) — dash: 8px wide, centered */
  .indicator[data-size='sm']::after {
    left: 3px;
    top: 0px;
    width: 3px;
    height: 6px;
  }
  .indicator[data-size='sm']::before {
    left: 1px;
    top: 4px;
    width: 8px;
  }

  /* Checkmark: 4px x 8px at (4px, 0px) — dash: 10px wide, centered */
  .indicator[data-size='md']::after {
    left: 4px;
    top: 0px;
    width: 4px;
    height: 8px;
  }
  .indicator[data-size='md']::before {
    left: 2px;
    top: 6px;
    width: 10px;
  }

  /* Checkmark: 5px x 10px at (6px, 1px) — dash: 12px wide, centered */
  .indicator[data-size='lg']::after {
    left: 6px;
    top: 1px;
    width: 5px;
    height: 10px;
  }
  .indicator[data-size='lg']::before {
    left: 3px;
    top: 8px;
    width: 12px;
  }

  .indicator[data-state='checked'],
  .indicator[data-state='indeterminate'] {
    background: var(--_fill, var(--color-onyx-9));
    border-color: var(--_fill, var(--color-onyx-9));
  }

  .indicator[data-state='checked']::after {
    display: block;
  }

  .indicator[data-state='indeterminate']::before {
    display: block;
  }
`}));export{s as n,a as r,o as t};