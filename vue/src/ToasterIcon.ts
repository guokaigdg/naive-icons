import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ToasterIcon = defineComponent({
  name: 'ToasterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '20', width: '36', height: '19', rx: '5', fill: '#E76F51' }));
      children.push(h('path', { d: 'M14 20 L14 10 C14 7 20 7 20 10 L20 20 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M27 20 L27 8 C27 5 33 5 33 8 L33 20 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M12 34 L36 34', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default ToasterIcon;
