import { useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { HandHeart } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { FieldGroup } from '@/components/ui/field'
import { FormProvider, RHFPasswordField, RHFTextField } from '@/components/hook-form'
import { useAuth } from '@/providers/auth-provider'
import { showResponseError } from '@/lib/utils'
import { type Resolver } from 'react-hook-form'
import { z } from 'zod'

const loginFormSchema = z.object({
    username: z.string().trim().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
    password: z.string().min(1, 'Vui lòng nhập mật khẩu'),
})

type LoginFormValues = z.infer<typeof loginFormSchema>

const loginFormResolver: Resolver<LoginFormValues> = async (values) => {
    const result = loginFormSchema.safeParse(values)
    if (result.success) {
        return { values: result.data, errors: {} }
    }
    return {
        values: {},
        errors: result.error.issues.reduce<Record<string, { type: string; message: string }>>((errors, issue) => {
            const fieldName = issue.path[0]
            if (typeof fieldName === 'string') {
                errors[fieldName] = {
                    type: issue.code,
                    message: issue.message,
                }
            }
            return errors
        }, {}),
    }
}

const LoginPage = () => {
    const navigate = useNavigate()
    const { login, isLoggingIn } = useAuth()

    const form = useForm<LoginFormValues>({
        resolver: loginFormResolver,
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const onSubmit = async (values: LoginFormValues) => {
        try {
            await login(values)
            toast.success('Đăng nhập thành công')
            await navigate({ to: '/cms/post/list' })
        } catch (error) {
            showResponseError(error)
        }
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-4">
            <Card className="w-full max-w-sm shadow-sm">
                <CardHeader className="items-center text-center">
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <HandHeart className="size-5" />
                    </div>
                    <CardTitle>Đăng nhập quản lý CMS</CardTitle>
                    <CardDescription>Ánh sáng từ thiện</CardDescription>
                </CardHeader>
                <CardContent>
                    <FormProvider
                        methods={form}
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FieldGroup>
                            <RHFTextField
                                name="username"
                                fieldLabel="Email"
                                type="email"
                                autoComplete="username"
                                disabled={isLoggingIn}
                            />
                            <RHFPasswordField
                                name="password"
                                fieldLabel="Mật khẩu"
                                autoComplete="current-password"
                                disabled={isLoggingIn}
                            />
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoggingIn || form.formState.isSubmitting}
                            >
                                {isLoggingIn ? 'Đang đăng nhập...' : 'Đăng nhập'}
                            </Button>
                        </FieldGroup>
                    </FormProvider>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginPage
