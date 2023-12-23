import { combineProps } from '@solid-primitives/props'
import { Dynamic, DynamicProps } from 'solid-js/web'
import type { ValidComponent } from 'solid-js'

const MyComponent = <T extends ValidComponent = 'div'>(
  props: DynamicProps<T>,
) => {
  const combinedProps = combineProps([props])
  const children = <div>children</div>
  // This worked with typescript version <= 5.2 and broke in 5.3
  return <Dynamic {...combinedProps}>{children}</Dynamic>
}

export default MyComponent
