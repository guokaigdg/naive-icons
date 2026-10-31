import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SnowflakeIcon = defineComponent({
  name: 'SnowflakeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '3', fill: '#2A9D8F' }));
      children.push(
        h('g', { transform: 'rotate(0 24 24)' }, [
          h('path', { d: 'M24 5 L24 43 M24 16 L20.1 13.75 M24 16 L27.9 13.75 M24 10 L21.4 8.5 M24 10 L26.6 8.5 M24 32 L20.1 34.25 M24 32 L27.9 34.25 M24 38 L21.4 39.5 M24 38 L26.6 39.5', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }),
        ]),
      );
      children.push(
        h('g', { transform: 'rotate(60 24 24)' }, [
          h('path', { d: 'M24 5 L24 43 M24 16 L20.1 13.75 M24 16 L27.9 13.75 M24 10 L21.4 8.5 M24 10 L26.6 8.5 M24 32 L20.1 34.25 M24 32 L27.9 34.25 M24 38 L21.4 39.5 M24 38 L26.6 39.5', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }),
        ]),
      );
      children.push(
        h('g', { transform: 'rotate(120 24 24)' }, [
          h('path', { d: 'M24 5 L24 43 M24 16 L20.1 13.75 M24 16 L27.9 13.75 M24 10 L21.4 8.5 M24 10 L26.6 8.5 M24 32 L20.1 34.25 M24 32 L27.9 34.25 M24 38 L21.4 39.5 M24 38 L26.6 39.5', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }),
        ]),
      );
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

export default SnowflakeIcon;
