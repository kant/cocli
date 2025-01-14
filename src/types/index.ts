declare global {
  type TCommonRecord = Record<string, string>

  type TCliError = {
    message?: string
    stack?: string
  }

  type TGitCommit = {
    commit: string
  }

  type TLogType = 'info' | 'success' | 'error'

  type TLog = {
    type?: TLogType
    msg: string
    isConsole?: boolean
    newLine?: boolean
  }

  type TGitStaged = 'modified' | 'untracked'
}
