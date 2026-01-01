interface PageProps {
    params: { lession: string }
}

const Lession = async ({ params }: PageProps) => {
    const { lession } = await params;
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <p className="text-gray-700">
                Content for <strong>{lession}</strong> page goes here.
            </p>
        </div>
    )
}
export default Lession
