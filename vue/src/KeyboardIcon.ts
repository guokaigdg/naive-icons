import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KeyboardIcon = defineComponent({
  name: 'KeyboardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '15', width: '38', height: '19', rx: '4', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M12 21 L14.5 21 M18.5 21 L21 21 M25 21 L27.5 21 M31.5 21 L34 21', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M12 27 L14.5 27 M18.5 27 L21 27 M25 27 L27.5 27', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M16 31.5 L32 31.5', stroke: '#E76F51', 'stroke-width': sw(3) }));
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

export default KeyboardIcon;
