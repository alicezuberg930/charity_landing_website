import CustomInput from "../../components/CustomInput"

const LoginPage = () => {
    return (
        <div className="content-center w-full h-screen overflow-hidden">
            <div className="mx-auto max-w-[640px] rounded-md shadow-[0_0_2px_0_rgba(145,158,171,0.2),0_12px_24px_-4px_rgba(145,158,171,0.12)] p-3 space-y-3">
                <div className="text-center">
                    <span>Đăng nhập quản lý CMS</span>
                </div>
                <form className="space-y-4">
                    <div className="space-y-1">
                        <span className="text-sm font-bold">Số điện thoại</span>
                        <CustomInput type='text' name='phone' />
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm font-bold">Mật khẩu</span>
                        <CustomInput type='password' name='password' />
                    </div>
                    <div className="text-end pt-3">
                        <button className="rounded-md bg-blue-500 text-white px-3 py-2">
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage