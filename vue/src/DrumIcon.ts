import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DrumIcon = defineComponent({
  name: 'DrumIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 13 V30 C 9 36 39 36 39 30 V13', fill: '#E76F51' }));
      children.push(h('ellipse', { cx: '24', cy: '13', rx: '15', ry: '5.5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M12 19.5 L17 22.5 L12 25.5', stroke: '#FAEDCD', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M36 19.5 L31 22.5 L36 25.5', stroke: '#FAEDCD', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M10 31 C 14 34.5 34 34.5 38 31', stroke: '#E9C46A', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default DrumIcon;
