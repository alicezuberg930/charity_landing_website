import { FormProvider as Form, type UseFormReturn } from 'react-hook-form'

type Props = {
  children: React.ReactNode
  methods: UseFormReturn<any>
  onSubmit?: VoidFunction
  id?: string
}

export const FormProvider = ({
  children,
  onSubmit,
  methods,
  id,
}: Readonly<Props>) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} id={id}>
        {children}
      </form>
    </Form>
  )
}
