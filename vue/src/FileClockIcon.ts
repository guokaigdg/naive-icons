import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileClockIcon = defineComponent({
  name: 'FileClockIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 6 L12 42 L36 42 L36 18 L24 6 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 6 L24 18 L36 18', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '29', cy: '31', r: '8', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M29 26.5 L29 31 L33 34', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
      return h(
        'svg',
        {
          viewBox: '0 0 48 48',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          role: props.title ? 'img' : undefined,
          'aria-hidden': labelled ? undefined : true,
          ...normalizeIconProps({ ...props, ...attrs }),
        },
        children,
      );
    };
  },
});

export default FileClockIcon;
