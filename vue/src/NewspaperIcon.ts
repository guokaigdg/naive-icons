import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NewspaperIcon = defineComponent({
  name: 'NewspaperIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '10', width: '32', height: '28', rx: '3', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '8', y: '10', width: '32', height: '8', fill: '#E76F51' }));
      children.push(h('rect', { x: '12', y: '22', width: '11', height: '12', rx: '1', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M27 23 L36 23', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M27 28 L36 28', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M27 33 L36 33', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M12 26 L23 26', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default NewspaperIcon;
