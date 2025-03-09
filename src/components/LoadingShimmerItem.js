import React, { memo } from "react"

const LoadingShimmerItem = ({ count = 5 }) => {
    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4 animate-pulse">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 bg-gray-300 rounded-full" />

                    {/* Text Placeholder */}
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4" />
                        <div className="h-4 bg-gray-300 rounded w-1/2" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default memo(LoadingShimmerItem)