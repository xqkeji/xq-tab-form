import {
  domReady,
  parents
} from './xq-util'

const XQ_TAB_FORM_CLASS = '.xq-tab-form'
const xqTabForm=()=>{
  let is_first = true
    const tab_form = document.querySelector(XQ_TAB_FORM_CLASS)
    if (tab_form) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const submit = tab_form.querySelector('input[type=submit]')!
      submit.addEventListener('click', () => {
        is_first = true
      })
      const elements=(tab_form as HTMLFormElement).elements
      // @ts-expect-error
      for (const element of elements) {
        // eslint-disable-next-line @typescript-eslint/no-loop-func,@typescript-eslint/no-loop-func
        element.addEventListener('invalid', (event:any) => {
          if (is_first) {
            const target = event.currentTarget as Element
            const tab_pane = parents(target, '.tab-pane')[0] as HTMLElement

            if (window.getComputedStyle(tab_pane).display === 'none') {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              const tab_id = tab_pane.getAttribute('aria-labelledby')!
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              const el = document.querySelector('#' + tab_id)!
              // @ts-expect-error
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
              const tab = new bootstrap.Tab(el)
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
              tab.show()
              el.addEventListener('shown.bs.tab', () => {
                // @ts-expect-error
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                target.reportValidity()
              })
            }

            is_first = false
          }
        })
      }
    }
}

export default xqTabForm