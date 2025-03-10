/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MutableRefObject, useRef, useEffect, useState } from "react"

export const usePrevious = (value: any): any => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const useIsOverflowing = (
  ref: MutableRefObject<HTMLElement | null>,
  expanded?: boolean
): boolean => {
  const { current } = ref
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    if (current) {
      const { scrollHeight, clientHeight } = current

      setIsOverflowing(scrollHeight > clientHeight)
    }
  }, [setIsOverflowing, expanded, current, current?.clientHeight])

  return isOverflowing
}
