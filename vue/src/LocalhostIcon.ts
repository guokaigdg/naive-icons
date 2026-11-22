import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LocalhostIcon = defineComponent({
  name: 'LocalhostIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '11', width: '36', height: '26', rx: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '12', cy: '17', r: '1.8', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '18', cy: '17', r: '1.8', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M12 25 H34 M12 31 H27', stroke: '#FAEDCD', 'stroke-width': sw(2.4), fill: 'none' }));
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

export default LocalhostIcon;
