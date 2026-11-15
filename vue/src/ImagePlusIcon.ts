import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ImagePlusIcon = defineComponent({
  name: 'ImagePlusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '10', width: '30', height: '27', rx: '3', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '14', cy: '18', r: '2.4', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M9 33 L16 24 L22 30 L27 25 L33 32', stroke: '#2A9D8F', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '35', cy: '35', r: '8', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M35 31 L35 39 M31 35 L39 35', stroke: '#E76F51', 'stroke-width': sw(3) }));
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

export default ImagePlusIcon;
