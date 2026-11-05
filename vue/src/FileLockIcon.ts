import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileLockIcon = defineComponent({
  name: 'FileLockIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 7 L28 7 L38 17 L38 41 L12 41 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M28 7 L28 17 L38 17', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '20.5', y: '30', width: '9', height: '7', rx: '1.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M22.5 30 L22.5 27.2 C22.5 24 27.5 24 27.5 27.2 L27.5 30', stroke: '#264653', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default FileLockIcon;
