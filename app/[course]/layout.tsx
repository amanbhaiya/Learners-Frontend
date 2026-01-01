const DashboardLayout = ({ children }: { children: React.ReactNode }) => {


    const user = {
        name: "John Smith Doe",
        email: "john@example.com"
    }
    return (
        <main>{children}</main>
    );
}

export default DashboardLayout
