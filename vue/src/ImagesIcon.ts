import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ImagesIcon = defineComponent({
  name: 'ImagesIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '15', y: '6', width: '27', height: '21', rx: '3', fill: '#E9C46A' }));
      children.push(h('rect', { x: '6', y: '15', width: '29', height: '27', rx: '3', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '13', cy: '22', r: '2.4', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M9 38 L17 28 L23 34 L29 26 L35 33', stroke: '#2A9D8F', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default ImagesIcon;
