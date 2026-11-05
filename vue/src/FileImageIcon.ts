import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const FileImageIcon = defineComponent({
  name: 'FileImageIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 7 L28 7 L38 17 L38 41 L12 41 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M28 7 L28 17 L38 17', fill: 'none', stroke: '#2A2A2A' }));
      children.push(h('circle', { cx: '20', cy: '24', r: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M14 38 L22 28 L29 35 L33 31 L37 38', fill: '#2A9D8F', stroke: 'none' }));
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

export default FileImageIcon;
